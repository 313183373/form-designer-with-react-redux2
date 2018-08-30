import React from 'react';
import { DatePicker, Button } from 'antd';
import PropTypes from 'prop-types';

class DateItem extends React.Component {
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    render(){
        console.log(this.context);
        return <div>
            <DatePicker />
            <Button disabled={this.props.disabled} onClick={() => this.props.onClick(this.props.id)}>删除</Button>
        </div>
    }
}

export default DateItem;