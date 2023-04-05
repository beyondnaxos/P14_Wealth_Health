import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing.jsx'
import { Datablify } from 'datablify'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'

function App() {
  // console.log(Datablify)
  // const data = [
  //   {
  //     ID: 1,
  //     Name: 'John',
  //     Age: 25,
  //     Adress: 'New York',
  //     Phone: '123456789',
  //     Email: 'ada@gmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 100,
  //     Quantity: 2,
  //     Total: 200,
  //   },
  //   {
  //     ID: 2,
  //     Name: 'Peter',
  //     Age: 30,
  //     Adress: 'London',
  //     Phone: '987654321',
  //     Email: 'rez@gmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 100,
  //     Quantity: 2,
  //     Total: 200,
  //   },
  //   {
  //     ID: 3,
  //     Name: 'Emily',
  //     Age: 28,
  //     Adress: 'Los Angeles',
  //     Phone: '234567890',
  //     Email: 'jane@gmail.com',
  //     Size: 'S',
  //     Color: 'Green',
  //     Price: 50,
  //     Quantity: 4,
  //     Total: 200,
  //   },
  //   {
  //     ID: 4,
  //     Name: 'Jacob',
  //     Age: 42,
  //     Adress: 'Chicago',
  //     Phone: '345678901',
  //     Email: 'jack@yahoo.com',
  //     Size: 'L',
  //     Color: 'Blue',
  //     Price: 75,
  //     Quantity: 3,
  //     Total: 225,
  //   },
  //   {
  //     ID: 5,
  //     Name: 'Olivia',
  //     Age: 20,
  //     Adress: 'Paris',
  //     Phone: '456789012',
  //     Email: 'kate@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 6,
  //     Name: 'William',
  //     Age: 35,
  //     Adress: 'Tokyo',
  //     Phone: '567890123',
  //     Email: 'mark@gmail.com',
  //     Size: 'L',
  //     Color: 'Red',
  //     Price: 80,
  //     Quantity: 2,
  //     Total: 160,
  //   },
  //   {
  //     ID: 7,
  //     Name: 'Sophia',
  //     Age: 27,
  //     Adress: 'Sydney',
  //     Phone: '678901234',
  //     Email: 'lucy@gmail.com',
  //     Size: 'S',
  //     Color: 'Green',
  //     Price: 55,
  //     Quantity: 6,
  //     Total: 330,
  //   },
  //   {
  //     ID: 8,
  //     Name: 'Ethan',
  //     Age: 29,
  //     Adress: 'New York',
  //     Phone: '789012345',
  //     Email: 'alex@yahoo.com',
  //     Size: 'M',
  //     Color: 'Blue',
  //     Price: 70,
  //     Quantity: 3,
  //     Total: 210,
  //   },
  //   {
  //     ID: 9,
  //     Name: 'Ava',
  //     Age: 24,
  //     Adress: 'London',
  //     Phone: '890123456',
  //     Email: 'rachel@gmail.com',
  //     Size: 'S',
  //     Color: 'Yellow',
  //     Price: 45,
  //     Quantity: 7,
  //     Total: 315,
  //   },
  //   {
  //     ID: 10,
  //     Name: 'James',
  //     Age: 31,
  //     Adress: 'Los Angeles',
  //     Phone: '901234567',
  //     Email: 'john@hotmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 85,
  //     Quantity: 4,
  //     Total: 340,
  //   },
  //   {
  //     ID: 11,
  //     Name: 'Isabella',
  //     Age: 26,
  //     Adress: 'Chicago',
  //     Phone: '012345678',
  //     Email: 'sarah@gmail.com',
  //     Size: 'L',
  //     Color: 'Green',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 12,
  //     Name: 'Benjamin',
  //     Age: 37,
  //     Adress: 'Paris',
  //     Phone: '123456789',
  //     Email: 'jason@yahoo.com',
  //     Size: 'S',
  //     Color: 'Blue',
  //     Price: 40,
  //     Quantity: 8,
  //     Total: 320,
  //   },
  //   {
  //     ID: 13,
  //     Name: 'Mia',
  //     Age: 23,
  //     Adress: 'Tokyo',
  //     Phone: '234567890',
  //     Email: 'jessica@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 65,
  //     Quantity: 2,
  //     Total: 130,
  //   },
  //   {
  //     ID: 14,
  //     Name: 'Olivia',
  //     Age: 20,
  //     Adress: 'Paris',
  //     Phone: '456789012',
  //     Email: 'kate@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 15,
  //     Name: 'William',
  //     Age: 35,
  //     Adress: 'Tokyo',
  //     Phone: '567890123',
  //     Email: 'mark@gmail.com',
  //     Size: 'L',
  //     Color: 'Red',
  //     Price: 80,
  //     Quantity: 2,
  //     Total: 160,
  //   },
  //   {
  //     ID: 16,
  //     Name: 'Sophia',
  //     Age: 27,
  //     Adress: 'Sydney',
  //     Phone: '678901234',
  //     Email: 'lucy@gmail.com',
  //     Size: 'S',
  //     Color: 'Green',
  //     Price: 55,
  //     Quantity: 6,
  //     Total: 330,
  //   },
  //   {
  //     ID: 17,
  //     Name: 'Ethan',
  //     Age: 29,
  //     Adress: 'New York',
  //     Phone: '789012345',
  //     Email: 'alex@yahoo.com',
  //     Size: 'M',
  //     Color: 'Blue',
  //     Price: 70,
  //     Quantity: 3,
  //     Total: 210,
  //   },
  //   {
  //     ID: 18,
  //     Name: 'Ava',
  //     Age: 24,
  //     Adress: 'London',
  //     Phone: '890123456',
  //     Email: 'rachel@gmail.com',
  //     Size: 'S',
  //     Color: 'Yellow',
  //     Price: 45,
  //     Quantity: 7,
  //     Total: 315,
  //   },
  //   {
  //     ID: 19,
  //     Name: 'James',
  //     Age: 31,
  //     Adress: 'Los Angeles',
  //     Phone: '901234567',
  //     Email: 'john@hotmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 85,
  //     Quantity: 4,
  //     Total: 340,
  //   },
  //   {
  //     ID: 20,
  //     Name: 'Isabella',
  //     Age: 26,
  //     Adress: 'Chicago',
  //     Phone: '012345678',
  //     Email: 'sarah@gmail.com',
  //     Size: 'L',
  //     Color: 'Green',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 21,
  //     Name: 'Benjamin',
  //     Age: 37,
  //     Adress: 'Paris',
  //     Phone: '123456789',
  //     Email: 'jason@yahoo.com',
  //     Size: 'S',
  //     Color: 'Blue',
  //     Price: 40,
  //     Quantity: 8,
  //     Total: 320,
  //   },
  //   {
  //     ID: 22,
  //     Name: 'Mia',
  //     Age: 23,
  //     Adress: 'Tokyo',
  //     Phone: '234567890',
  //     Email: 'jessica@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 65,
  //     Quantity: 2,
  //     Total: 130,
  //   },
  //   {
  //     ID: 23,
  //     Name: 'Olivia',
  //     Age: 20,
  //     Adress: 'Paris',
  //     Phone: '456789012',
  //     Email: 'kate@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 24,
  //     Name: 'William',
  //     Age: 35,
  //     Adress: 'Tokyo',
  //     Phone: '567890123',
  //     Email: 'mark@gmail.com',
  //     Size: 'L',
  //     Color: 'Red',
  //     Price: 80,
  //     Quantity: 2,
  //     Total: 160,
  //   },
  //   {
  //     ID: 25,
  //     Name: 'Sophia',
  //     Age: 27,
  //     Adress: 'Sydney',
  //     Phone: '678901234',
  //     Email: 'lucy@gmail.com',
  //     Size: 'S',
  //     Color: 'Green',
  //     Price: 55,
  //     Quantity: 6,
  //     Total: 330,
  //   },
  //   {
  //     ID: 26,
  //     Name: 'Ethan',
  //     Age: 29,
  //     Adress: 'New York',
  //     Phone: '789012345',
  //     Email: 'alex@yahoo.com',
  //     Size: 'M',
  //     Color: 'Blue',
  //     Price: 70,
  //     Quantity: 3,
  //     Total: 210,
  //   },
  //   {
  //     ID: 27,
  //     Name: 'Ava',
  //     Age: 24,
  //     Adress: 'London',
  //     Phone: '890123456',
  //     Email: 'rachel@gmail.com',
  //     Size: 'S',
  //     Color: 'Yellow',
  //     Price: 45,
  //     Quantity: 7,
  //     Total: 315,
  //   },
  //   {
  //     ID: 28,
  //     Name: 'James',
  //     Age: 31,
  //     Adress: 'Los Angeles',
  //     Phone: '901234567',
  //     Email: 'john@hotmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 85,
  //     Quantity: 4,
  //     Total: 340,
  //   },
  //   {
  //     ID: 29,
  //     Name: 'Isabella',
  //     Age: 26,
  //     Adress: 'Chicago',
  //     Phone: '012345678',
  //     Email: 'sarah@gmail.com',
  //     Size: 'L',
  //     Color: 'Green',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 30,
  //     Name: 'Benjamin',
  //     Age: 37,
  //     Adress: 'Paris',
  //     Phone: '123456789',
  //     Email: 'jason@yahoo.com',
  //     Size: 'S',
  //     Color: 'Blue',
  //     Price: 40,
  //     Quantity: 8,
  //     Total: 320,
  //   },
  //   {
  //     ID: 31,
  //     Name: 'Mia',
  //     Age: 23,
  //     Adress: 'Tokyo',
  //     Phone: '234567890',
  //     Email: 'jessica@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 65,
  //     Quantity: 2,
  //     Total: 130,
  //   },
  //   {
  //     ID: 32,
  //     Name: 'Olivia',
  //     Age: 20,
  //     Adress: 'Paris',
  //     Phone: '456789012',
  //     Email: 'kate@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 33,
  //     Name: 'William',
  //     Age: 35,
  //     Adress: 'Tokyo',
  //     Phone: '567890123',
  //     Email: 'mark@gmail.com',
  //     Size: 'L',
  //     Color: 'Red',
  //     Price: 80,
  //     Quantity: 2,
  //     Total: 160,
  //   },
  //   {
  //     ID: 34,
  //     Name: 'Sophia',
  //     Age: 27,
  //     Adress: 'Sydney',
  //     Phone: '678901234',
  //     Email: 'lucy@gmail.com',
  //     Size: 'S',
  //     Color: 'Green',
  //     Price: 55,
  //     Quantity: 6,
  //     Total: 330,
  //   },
  //   {
  //     ID: 35,
  //     Name: 'Ethan',
  //     Age: 29,
  //     Adress: 'New York',
  //     Phone: '789012345',
  //     Email: 'alex@yahoo.com',
  //     Size: 'M',
  //     Color: 'Blue',
  //     Price: 70,
  //     Quantity: 3,
  //     Total: 210,
  //   },
  //   {
  //     ID: 36,
  //     Name: 'Ava',
  //     Age: 24,
  //     Adress: 'London',
  //     Phone: '890123456',
  //     Email: 'rachel@gmail.com',
  //     Size: 'S',
  //     Color: 'Yellow',
  //     Price: 45,
  //     Quantity: 7,
  //     Total: 315,
  //   },
  //   {
  //     ID: 37,
  //     Name: 'James',
  //     Age: 31,
  //     Adress: 'Los Angeles',
  //     Phone: '901234567',
  //     Email: 'john@hotmail.com',
  //     Size: 'M',
  //     Color: 'Red',
  //     Price: 85,
  //     Quantity: 4,
  //     Total: 340,
  //   },
  //   {
  //     ID: 38,
  //     Name: 'Isabella',
  //     Age: 26,
  //     Adress: 'Chicago',
  //     Phone: '012345678',
  //     Email: 'sarah@gmail.com',
  //     Size: 'L',
  //     Color: 'Green',
  //     Price: 60,
  //     Quantity: 5,
  //     Total: 300,
  //   },
  //   {
  //     ID: 39,
  //     Name: 'Benjamin',
  //     Age: 37,
  //     Adress: 'Paris',
  //     Phone: '123456789',
  //     Email: 'jason@yahoo.com',
  //     Size: 'S',
  //     Color: 'Blue',
  //     Price: 40,
  //     Quantity: 8,
  //     Total: 320,
  //   },
  //   {
  //     ID: 40,
  //     Name: 'Mia',
  //     Age: 23,
  //     Adress: 'Tokyo',
  //     Phone: '234567890',
  //     Email: 'jessica@hotmail.com',
  //     Size: 'M',
  //     Color: 'Yellow',
  //     Price: 65,
  //     Quantity: 2,
  //     Total: 130,
  //   },
    

    
  // ]

  // const categories = [
  //   'ID',
  //   'Name',
  //   'Age',
  //   'Adress',
  //   'Phone',
  //   'Email',
  //   'Size',
  //   'Color',
  //   'Price',
  //   'Quantity',
  //   'Total',
  // ]

  // return <Datablify data={data} categories={categories} />
  return (
    <BrowserRouter>
    <Nav />
    <Routing />
    </BrowserRouter>
  )
}

export default App
