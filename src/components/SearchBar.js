import React from "react";

class SearchBar extends React.Component {
    state = {
        term: ""
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === "") {
            alert("Required field");
        }
        this.setState({term: ""});
        this.props.onFormSubmit(this.state.term);
    }
    render () {
        return (    
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" placeholder="Search" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value})} /> 
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;