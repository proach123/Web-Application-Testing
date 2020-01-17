import React from 'react'
import App from '../../App'

import {strike, ball, foul, hit} from './functions';
import {render} from "@testing-library/react";

let state= {strikes: 0,
    balls: 0}

let newState = {strikes:1, balls:2}

test('both scoreboards are there', ()=>{
    const container = render(<App />)

    container.getByText(/strikes/i)
    container.getByText(/balls/i)
})

test("strike works as intended", ()=>{
    expect(strike(state)).toBe(state.strikes = 1)
    expect(strike(newState)).toBe(state.strikes = 2)
})

test(" ball works as intended", ()=>{
    
    expect(ball(state)).toBe(state.balls = 1)
    expect(ball(newState)).toBe(state.balls = 3)
})

test("foul works as intended", ()=>{
    expect(foul(newState)).toBe(state.strikes = 2)
    expect(foul(newState)).toBe(state.balls = 2)
})

test("hit works as intended", ()=>{
    expect(hit(newState)).toStrictEqual({balls:0, strikes: 0})
    expect(hit(state)).toStrictEqual({balls:0, strikes: 0})
})