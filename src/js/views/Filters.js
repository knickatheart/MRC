// Dependencies
import React from 'react';
import { Table } from 'reactstrap';

const FiltersView = ({ onClick, data }) => (
	<Table>
		<tbody>
			{data.map((obj, key) => {
				return (
					<tr key={key} onClick={() => onClick(obj.name)}>
						<td>{obj.username}</td>
					</tr>
				);
			})}
        </tbody>
    </Table>
);

export default FiltersView;
