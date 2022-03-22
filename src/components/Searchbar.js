import React from 'react';
//import {LogoYutu} from "./assets/hica.jpeg";

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            {/* <h2  style={{textAlign:"center"}}><img style={{width:'20px', height:'30px',justifyContent:'center'}} src={LogoYutu} alt="Hica"></img></h2> */}
            <h1 style={{textAlign:"center"}}>Hica</h1>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Entrez le categories de videos </label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Recherche.."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;