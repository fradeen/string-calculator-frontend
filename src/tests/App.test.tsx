import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    test('renders the App component', () => {
        render(<App />)
        expect(screen.getByRole("main").children.length).toBe(2)
        expect(screen.getByRole("heading")).toHaveTextContent('String Calculator')
        expect(screen.getByRole("form")).toHaveAttribute('id', 'string_calculator_form')
        expect(screen.getByRole("textbox", { name: 'Enter String' }))
        expect(screen.getByRole("button")).toHaveAttribute('type', 'submit')

    })
})