// Dependencies
import React from 'react';
import { Table } from 'reactstrap';

const TableView = () => (
	<Table>
        <thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
            <tr>
			    <td>Homer</td>
			    <td>Simpson</td>
			    <td>@hsimpson</td>
			</tr>
			<tr>
                <td>Gianluigi</td>
                <td>Mango</td>
                <td>@gmango</td>
            </tr>
        </tbody>
    </Table>
);

export default TableView;
