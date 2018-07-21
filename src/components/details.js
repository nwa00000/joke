import React, { Component } from 'react';
import axios from 'axios'
import Qs from 'qs'

export class Details extends Component{
	
	constructor(props){
		super(props)
		this.state={
			list:'',
			dataList: []
		}
	}
	
	componentDidMount(){
		let names = JSON.parse(window.sessionStorage.getItem('item'))
		this.state.list=names
		this.setState({
			list:this.state.list
		})
		
		
		
		let url = 'http://guoxiao158.top/joke/getpl.php?id=' + this.state.list.id
		
		axios.get(url).then(res => {
			this.setState({
				dataList: res.data.dataList
			})
		})
	}
	
	render(){
		return (
			<div className="App">
				<div className = "header">
					<button onClick = {
						(e) => {
							this.props.history.go(-1)
						}
					}>返回</button>
					详情
				</div>	
				<div className="detail-neir">{this.state.list.content}</div>
				<ul>
					{
						this.state.dataList.map((item,index) => {
							return <li key={index}>
								<p className = 'touxiang'></p>
								<p className = 'names'>xxx先生</p>
								<p className = 'detaila'>{item.content}</p>
							</li>
						})
					}
				</ul>
				<div className='foot'>
					<input type="text" ref="tests" />
					<button onClick = {
						(e) => {
							let tests = {
								uid: this.state.list.id,
								pinglun: this.refs.tests.value
							}
							let url = 'http://guoxiao158.top/joke/addpl.php'
							let urls = 'http://guoxiao158.top/joke/getpl.php?id=' + this.state.list.id
							axios.post(url,Qs.stringify(tests)).then(res => {
								if(res.data.code == 1){
									axios.get(urls).then(res => {
										this.setState({
											dataList: res.data.dataList
										})
									})
									this.refs.tests.value = ''
								}
							})
							
						}
					}>发送</button>
				</div>
			</div>
		)
	}
}

