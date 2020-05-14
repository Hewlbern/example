import React, { Component, Fragment } from "react";



class SearchBar extends Component {
    render() {
        //   const { authenticated } = this.props;
        return (
            <div className="bg-white shadow p-4 flex">
                <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                    <i className="material-icons text-3xl">search</i>
                </span>
                <input className="w-full rounded p-2" type="text" placeholder="Try 'Wallets'" />
                <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                    <p className="font-semibold text-xs">Search</p>
                </button>
            </div>
        )


    }
}

export default SearchBar;