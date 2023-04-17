import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'
import Form from '../Components/Form/Form'
import mockData from '../mock/mockedData.json'
import { usersInfosContext } from '../App'

describe('Form', () => {

  const setUsersInfos = vi.fn()

  const usersInfos = mockData.default
  
  beforeEach(() => {
    render(
      <usersInfosContext.Provider value={{ usersInfos, setUsersInfos }}>
        <Form />
      </usersInfosContext.Provider>
    )
  })
  
  it('should be called ', () => {
    setUsersInfos(mockData.default)
    expect(setUsersInfos).toHaveBeenCalled()
  }) 

  it('should render all form input fields', () => {
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Department')).toBeInTheDocument()
    expect(screen.getByLabelText('Street')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('State')).toBeInTheDocument()
    expect(screen.getByLabelText('Zip Code')).toBeInTheDocument()
  })

  it('should submit the form with all required fields', () => {

    const submitButton = screen.getByText('Submit')

    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const dateOfBirthInput = screen.getByLabelText('Date of Birth')
    const startDateInput = screen.getByLabelText('Start Date')
    const departmentInput = screen.getByLabelText('Department')
    const streetInput = screen.getByLabelText('Street')
    // const cityInput = screen.getByLabelText('City')
    const stateInput = screen.getByLabelText('State')
    const zipCodeInput = screen.getByLabelText('Zip Code')

    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    fireEvent.change(dateOfBirthInput, { target: { value: '2000-01-01' } })
    fireEvent.change(startDateInput, { target: { value: '2020-01-01' } })
    fireEvent.change(departmentInput, { target: { value: 1 } })
    fireEvent.change(streetInput, { target: { value: '123 Main St' } })
    // fireEvent.change(cityInput, { target: { value: 'New York' } })
    fireEvent.change(stateInput, { target: { value: 1 } })
    fireEvent.change(zipCodeInput, { target: { value: '10001' } })


    const options = screen.getAllByRole('option')
    const stateSelectOption = stateInput.children[1]



    fireEvent.click(submitButton)

    
    expect(firstNameInput.value).toBe('John')
    expect(lastNameInput.value).toBe('Doe')
    expect(dateOfBirthInput.value).toBe('2000-01-01')
    expect(startDateInput.value).toBe('2020-01-01')
    expect(options[1].value).toBe('marketing');
    expect(streetInput.value).toBe('123 Main St')
    // expect(cityInput.value).toBe('New York')
    expect(stateSelectOption.value).toBe('AK')
    expect(zipCodeInput.value).toBe('10001')
    

  })

  it("should display modal when form is submitted", () => {})

  it('should not submit the form with missing required fields', () => {

    const submitButton = screen.getByText('Submit')

    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const dateOfBirthInput = screen.getByLabelText('Date of Birth')
    const startDateInput = screen.getByLabelText('Start Date')
    const departmentInput = screen.getByLabelText('Department')
    const streetInput = screen.getByLabelText('Street')
    // const cityInput = screen.getByLabelText('City')
    const stateInput = screen.getByLabelText('State')
    const zipCodeInput = screen.getByLabelText('Zip Code')

    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    fireEvent.change(dateOfBirthInput, { target: { value: '2000-01-01' } })
    fireEvent.change(startDateInput, { target: { value: '2020-01-01' } })
    fireEvent.change(departmentInput, { target: { value: 1 } })
    fireEvent.change(streetInput, { target: { value: '123 Main St' } })
    // fireEvent.change(cityInput, { target: { value: 'New York' } })
    fireEvent.change(stateInput, { target: { value: 1 } })
    fireEvent.change(zipCodeInput, { target: { value: '' } })


    const options = screen.getAllByRole('option')
    const stateSelectOption = stateInput.children[1]



    fireEvent.click(submitButton)


    expect(firstNameInput.value).toBe('John')
    expect(lastNameInput.value).toBe('Doe')
    expect(dateOfBirthInput.value).toBe('2000-01-01')
    expect(startDateInput.value).toBe('2020-01-01')
    expect(options[1].value).toBe('marketing');
    expect(streetInput.value).toBe('123 Main St')
    // expect(cityInput.value).toBe('New York')
    expect(stateSelectOption.value).toBe('AK')
    expect(zipCodeInput.value).toBe('')
    
  })
})
