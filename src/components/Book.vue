<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 搜索区 -->
		<div class="table_earch_space">
				<el-input placeholder="请输入内容" size="small" style="width:20%;" v-model="keyword">
				    <el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
				<el-button type="primary" size="small" @click="modalAdd">添加</el-button>
		</div>
		<!-- table -->
		 <template>
		    <el-table border v-loading="listLoading" max-height="1000" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
			    <el-table-column prop="sex" label="性别" width="100"></el-table-column>
			    <el-table-column prop="old" label="年龄" width="100"></el-table-column>
			    <el-table-column prop="birthday" label="出生日期" width="160"></el-table-column>
			    <el-table-column prop="checkList" label="爱好" width=""></el-table-column>
			    <el-table-column prop="area" label="活动区域" width=""></el-table-column>
			    <el-table-column prop="caoZuo" label="操作" width="">
				    <template slot-scope="scope">
			            <el-button size="small" @click="edit(scope)">编辑</el-button>
			            <el-button type="danger" @click="idelete(scope)" size="small">删除</el-button>
			         </template>
			    </el-table-column>
		    </el-table>
		 </template>

		 <!-- 新增模态框 -->
		<el-dialog title="新增" :visible.sync="dialogFormVisible" :close-on-press-escape="coustFalst" :close-on-click-modal="coustFalst">
			<el-form label-position="left" :rules="rules" label-width="80px" ref="formData" :model="formData">
					<el-form-item label="姓名" prop="name"> 
							<el-input v-model="formData.name"></el-input>
					</el-form-item>
					<el-form-item label="性别" prop="sex"> 
						<el-radio-group v-model="formData.sex">
							 <el-radio label="男">男</el-radio>
							 <el-radio label="女">女</el-radio>
						</el-radio-group>	 
					</el-form-item>
					<el-form-item label="年龄" prop="old"> 
							<el-input-number v-model="formData.old" controls-position="right" :min="1" :max="100"></el-input-number>
					</el-form-item>
					<el-form-item label="出生日期" prop="birthday">
							<el-date-picker v-model="formData.birthday" type="date" placeholder="选择出生日期"></el-date-picker>
					</el-form-item>
					<el-form-item label="活动区域" prop="area">
							<el-select v-model="formData.area" placeholder="请选择">
							    <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
							 </el-select>
					</el-form-item>
					<el-form-item label="爱好">
							<el-checkbox-group v-model="formData.checkList">
							    <el-checkbox label="读书"></el-checkbox>
							    <el-checkbox label="睡觉"></el-checkbox>
							    <el-checkbox label="看电影"></el-checkbox>
							    <el-checkbox label="打游戏"></el-checkbox>
							    <el-checkbox label="学习" disabled></el-checkbox>
							</el-checkbox-group>
					</el-form-item>
			</el-form>

			<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false" >取 消</el-button>
			    <el-button type="primary" @click="modelSure('formData')">确 定</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				coustFalst:false,
				keyword:'',
				listLoading:false,
				formData:{
					name:'',
					sex:'',
					old:'',
					birthday:'',
					area:'',
					checkList:['学习'],
				},
				selectOptions:[
					{
						value:'兴庆区',
						label:'兴庆区'
					},
					{
						value:'金凤区',
						label:'金凤区'
					},
					{
						value:'西夏区',
						label:'西夏区'
					},
					{
						value:'永宁县',
						label:'永宁县'
					},
					{
						value:'贺兰县',
						label:'贺兰县'
					},
				],
				rules:{
					name: [
			            { required: true, message: '请输入姓名', trigger: 'blur' },
			            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
			        ],
			        birthday: [
			            { type: 'date', required: true, message: '请选择出生日期', trigger: 'blur' }
			        ],
			        sex: [
			            { required: true, message: '请选择性别', trigger: 'change' }
			        ],
			        old: [
			            { required: true, message: '请输入年龄', trigger: 'blur' }
			        ],
			        area: [
			            { required: true, message: '请选择活动区域', trigger: 'change' }
			        ],
				},
				tableData:[
					{
			            name: '王小虎',
			            sex: '男',
			            old: '16',
			            birthday:'2018-04-10',
			            checkList: ["吃饭","睡觉"],
			            area: '金凤区',
					},
					
				],
				dialogFormVisible: false,
			    formLabelWidth: '120px'
			}
		},
		methods:{
			// 多选监听
			handleSelectionChange(val) {
		        this.multipleSelection = val;
		        console.log(val)
		    },
		    // 编辑
		    edit(scope){
		    	console.log(scope)   	
		    },
		    //删除
		    idelete(scope){
		    	console.log(scope)  
		    	this.$confirm('确认删除该记录吗?', '提示', {
			        confirmButtonText: '确定',
			        cancelButtonText: '取消',
			        type: 'warning'
		        }).then(() => {
		        	this.listLoading = true;
		        	this.tableData.splice(scope.$index,1);
		        	this.listLoading = false;
			        this.$message({
			            type: 'success',
			            message: '删除成功!'
			        });
		        }).catch(() => {
		          	this.$message({
			            type: 'info',
			            message: '已取消删除'
			        });          
		        }); 	
		    },
		    //按钮新增
		    modalAdd(){
		    	this.resetForm('formData');
		    	this.formData = {
					name:'',
					sex:'',
					old:'',
					birthday:'',
					area:'',
					checkList:['学习'],
				}
				this.dialogFormVisible = true;
		    },
		    modelSure(formName){
		    	console.log(this.formData);
		    	this.$refs[formName].validate((valid) => {
			        if (valid) {
			            
			            this.dialogFormVisible = false;
			        } else {

			        }
		        });
		    },
		    //清空表单验证提示
		    resetForm(formName) {
		    	if(this.$refs[formName] !== undefined){
 					this.$refs[formName].resetFields();
		    	}		       
		    }
		}
	}
</script>

<style scoped lang="less">
	.table_earch_space{
		width: 100%;
	    background: #F2F2F2;
	    padding: 10px;
	    margin: 10px 0;
	}
</style>

