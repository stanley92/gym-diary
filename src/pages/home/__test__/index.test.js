
import { render, screen, within } from '@testing-library/react';
import Home from "../index";
import DiaryHistoryContextWrapper from "../../../contexts/DiaryHistoryContext";
import {fireEvent} from '@testing-library/react'
import crypto from "crypto";

Object.defineProperty(global, "crypto", {
    value:{
        randomUUID:() => crypto.randomBytes(6)
    }
});

test('given no input, when user click Submit button, then 3 instances of Cannot be empty is displayed', async ()=>{
    
    render(<DiaryHistoryContextWrapper><Home /></DiaryHistoryContextWrapper>);

    // Given - no input (no test code)

    // When - user click Submit button
    const submitButton = screen.getByRole('button', {name: 'Submit'});
    await fireEvent.click(submitButton);

    // Then - 3 instances of "Cannot be empty" message is displayed
    const appearingErrorMessages = screen.getAllByText('Cannot be empty');
    expect(appearingErrorMessages.length).toBe(3); // expects three instances of "Cannot be empty"
})


test('given all mandatory input is given, when user click Submit button, then list has one new entry', async ()=>{
    render(<DiaryHistoryContextWrapper><Home /></DiaryHistoryContextWrapper>);

    // Given - all mandatory input is given
    const summaryText = screen.getByLabelText("Summary");
    const dateText = screen.getByLabelText("Date");
    const activityText = screen.getByLabelText("Activity");
    const ratingInput = screen.getAllByRole("radio");
    
    await fireEvent.change(summaryText, {target:{value:"Upper Body Workout"}});
    await fireEvent.change(dateText, {target:{value:"05-05-2023"}});
    await fireEvent.change(activityText, {target:{value:"100 Push Ups"}})
    await fireEvent.click(ratingInput[3]);
    
    // When - user click Submit button
    const submitButton = screen.getByRole('button', {name: 'Submit'});
    await fireEvent.click(submitButton);

    // Then - List has one new entry
    const list = await screen.findByRole("list");
    const {getAllByLabelText} = within(list);
    expect(getAllByLabelText("li").length).toBe(1);
});