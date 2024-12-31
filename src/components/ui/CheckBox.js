import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            showConfirm: false
        };
    }

    handleChange(e) {
        const { checked } = e.target;
        this.setState({ showConfirm: true, tempChecked: checked });
    }

    handleConfirm() {
        this.setState({
            checked: this.state.tempChecked,
            showConfirm: false
        });
        this.props.onChange(this.state.tempChecked);
    }

    handleCancel() {
        this.setState({ showConfirm: false });
    }

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this)}
                />

                {this.state.showConfirm && (
                    <div className="confirm-dialog">
                        <p>Are you sure you want to mark this task as completed?</p>
                        <button onClick={() => this.handleConfirm()}>Confirm</button>
                        <button onClick={() => this.handleCancel()}>Cancel</button>
                    </div>
                )}
            </div>
        );
    }
}

export default CheckBox;
