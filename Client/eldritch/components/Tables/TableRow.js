import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


// import { toReadableDate } from '../../util/date';

const row = "border px-4 py-2";

class TableRow extends Component {
    onEditClick = () => {
        const { Project: { ProjectId }, history } = this.props;
        history.push(`/Projects/${ProjectId}`);
    };

    render() {
        const { Project: { Platform, Average, TopQuart, BotQuart, PMargin, Trend }, classes } = this.props;

        return (



            <tbody key={Platform}>
                <tr>
                    <td className={row}>Google Shopping Adverts</td>
                    <td className={row}>$60</td>
                    <td className={row}>Medium</td>
                    <td className={row} onClick={this.onEditClick} >Medium</td>
                </tr>

            </tbody>

        );
    }
}

export default TableRow;
