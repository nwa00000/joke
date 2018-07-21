import React, { Component } from 'react';

import axios from 'axios'


export class Apps extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			arr:[],
			num: 1,
			repeat: 1
		}
	}
	
	componentDidMount(){
		
		this.refs.sroll.addEventListener('scroll',() => {
			//总高度
			let scrollHeight = this.refs.sroll.scrollHeight
			//可视区域与顶部的高度
			let scrollTop = this.refs.sroll.scrollTop
			//可视区域的高度
			let offsetHeight = document.body.offsetHeight
			if(scrollHeight - (scrollTop + offsetHeight) < 50 && this.state.repeat == 1){
				this.setState({
					num: ++this.state.num,
					repeat: 2
				})

				let url = 'http://guoxiao158.top/joke/getjoke.php?page=' + this.state.num
				let arr = []
				axios.get(url).then((res) => {
					this.setState({
						arr:this.state.arr.concat(res.data.dataList),
						repeat: 1
					})
				})
			}
			//可视区域与顶部的距离超过800时触发
			if( scrollTop > 800 ){
				this.refs.scrollTops.style.display = 'block'
			}else{
				this.refs.scrollTops.style.display = 'none'
			}
		})
		
		
		let url = 'http://guoxiao158.top/joke/getjoke.php?page=' + this.state.num
		axios.get(url).then((res) => {
			this.setState({
				arr:res.data.dataList
			})
		})
		
		
	}
	
	_query = (item) => {
		this.props.history.push('/details')
		
		window.sessionStorage.setItem('item',JSON.stringify(item))
	}
	
  render() {
    return (
      <div className="App">
      	<div className = "head">冷笑话</div>
        <ul ref="sroll">
        	{
        		this.state.arr.map((item,index) => {
        			return <li key={index} onClick = {(e) => this._query(item)}>{ item.content }</li>
        		})
        	}
        </ul>
        <button ref="scrollTops" className = "scrollTop" onClick = {
        	() => {
        		this.refs.sroll.scrollTop = 0
        	}
        }>↑</button>
      </div>
    );
  }
}


