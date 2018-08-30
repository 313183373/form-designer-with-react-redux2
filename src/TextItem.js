import React from 'react';
import {Button} from 'antd';

class TextItem extends React.Component {
    render() {
        return <div>
            <input className='text' style={{width: '171px',height: '32px'}}/>
            <Button disabled={this.props.disabled} onClick={() => this.props.onClick(this.props.id)}>删除</Button>
        </div>
    }
}

export default TextItem;