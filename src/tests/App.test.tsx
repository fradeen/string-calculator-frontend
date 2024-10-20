import { describe, expect, test } from 'vitest'
import { fireEvent, queryByAttribute, render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    test('renders the App component', () => {
        render(<App />)
        expect(screen.getByRole("main").children.length).toBe(3)
        expect(screen.getByRole("heading")).toHaveTextContent('String Calculator')
        expect(screen.getByRole("form")).toHaveAttribute('id', 'string_calculator_form')
        expect(screen.getByRole("textbox", { name: 'Enter String' }))
        expect(screen.getByRole("button")).toHaveAttribute('type', 'submit')

    })
    test('Test form success.', () => {
        const app = render(<App />)
        const getById = queryByAttribute.bind(null, 'id');
        const textBox = screen.getByRole("textbox", { name: 'Enter String' })
        fireEvent.input(textBox, { target: { value: '1,2,3' } })
        fireEvent.click(screen.getByRole("button"))
        expect(getById(app.container, 'result')).toHaveTextContent(/^Result:*/g)
    })
    test('Test form error.', () => {
        const app = render(<App />)
        const getById = queryByAttribute.bind(null, 'id');
        const textBox = screen.getByRole("textbox", { name: 'Enter String' })
        fireEvent.input(textBox, { target: { value: 'a,b,c' } })
        fireEvent.click(screen.getByRole("button"))
        expect(getById(app.container, 'error')).toHaveTextContent(/^Error:*/g)
    })
    test('Test form result removal on input.', () => {
        const app = render(<App />)
        const getById = queryByAttribute.bind(null, 'id');
        const textBox = screen.getByRole("textbox", { name: 'Enter String' })
        fireEvent.input(textBox, { target: { value: '1,2,3' } })
        fireEvent.click(screen.getByRole("button"))
        expect(getById(app.container, 'result')).toHaveTextContent(/^Result:*/g)
        fireEvent.focus(textBox)
        expect(getById(app.container, 'result')).toBeNull()
    })
    test('Test form error removal on input.', () => {
        const app = render(<App />)
        const getById = queryByAttribute.bind(null, 'id');
        const textBox = screen.getByRole("textbox", { name: 'Enter String' })
        fireEvent.input(textBox, { target: { value: 'a,b,c' } })
        fireEvent.click(screen.getByRole("button"))
        expect(getById(app.container, 'error')).toHaveTextContent(/^Error:*/g)
        fireEvent.focus(textBox)
        expect(getById(app.container, 'error')).toBeNull()
    })
})