import React from 'react';
import { Table } from 'react-bootstrap';
import "./Review.css"

const Review = () => {
    return (
        <div className='w-50 mx-auto mt-5 '>
            <h2 className='text-center text-primary mt-5 mb-3'>Our Clients Review</h2>
            <Table striped bordered hover  >
                <thead className='table-container'>
                    <tr>

                        <th> Name</th>
                        <th>Review</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Samantha</td>
                        <td>"I really loved your product"</td>
                        <td>@samantha</td>
                    </tr>
                    <tr>

                        <td>Jacob Jacquline</td>
                        <td>"your product is awesome,keep up the good work"</td>
                        <td>@Jacob</td>
                    </tr>
                    <tr>

                        <td>Salmon</td>
                        <td>"your product really awesome ,i am going to get again"</td>
                        <td>@salmon</td>
                    </tr>
                    <tr>

                        <td colSpan={2}>Larry the Bird</td>
                        <td>@larry</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Review;