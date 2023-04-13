import React, {Component} from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, DialogContentText} from '@mui/material';

class CustomerDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    deleteCustomer(id) {
        let url = '/api/customers/' + id;
        fetch(url, {
            method: "DELETE"
        });
        this.props.stateRefresh();
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby='alert-dialog-description'>
                    <DialogTitle id="alert-dialog-title">
                        {"서버에서 유저 데이터를 삭제합니다."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-decription">
                            정말 서버에서 이 유저의 데이터를 삭제하시겠습니까? <br/> 확인을 누르면 삭제가 진행됩니다.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={(e) => this.deleteCustomer(this.props.id)}>확인</Button>
                        <Button variant='outlined' color='primary' onClick={this.handleClose}>확인</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;