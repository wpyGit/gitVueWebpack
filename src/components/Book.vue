<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- table -->
		 <template>
		    <el-table  height="300" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width=""></el-table-column>
			    <el-table-column prop="sex" label="性别" width=""></el-table-column>
			    <el-table-column prop="old" label="年龄" width=""></el-table-column>
			    <el-table-column prop="num" label="学号" width=""></el-table-column>
			    <el-table-column prop="address" label="地址" width=""></el-table-column>
			    <el-table-column prop="caoZuo" label="操作" width="">
				    <template slot-scope="scope">
			            <el-button size="small" @click="edit(scope)">编辑</el-button>
			            <el-button type="danger" @click="delete(scope.$index,scope.row)" size="small">删除</el-button>
			         </template>
			    </el-table-column>
		    </el-table>
		 </template>



	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData:[
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄',
			            
					},
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄'
					},
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄'
					},
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄'
					},
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄'
					},
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            num: '6401554009901',
			            address: '上海市普陀区金沙江路 1517 弄'
					},
				]
			}
		},
		methods:{
			handleSelectionChange(val) {
		        this.multipleSelection = val;
		        console.log(val)
		    },
		    edit(a){
		    	console.log(a)
		    	
		    }
		}
	}
</script>