import './identificadorStatus.css';
const IdentificadorStatus = (props) => {
    const {status} = props;
    if (status == 'Alive'){
        return(<div className='status_alive'></div>);
    }else if (status == 'Dead') {
        return(<div className='status_dead'></div>);
    }else {
        return(<div className='status_unknown'></div>);
    }
}

export default IdentificadorStatus;
