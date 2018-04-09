<template>
	<!-- 头部 -->
	<el-row class="i_index">
		  <el-col :span="24" class="i_header">
		  		<div class="grid-content bg-purple">123</div>
		  		<el-dropdown trigger="click" class="user_space">
				      <span class="el-dropdown-link">
				        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
					        <el-dropdown-item>黄金糕</el-dropdown-item>
					        <el-dropdown-item>狮子头</el-dropdown-item>
					        <el-dropdown-item>螺蛳粉</el-dropdown-item>
					        <el-dropdown-item>双皮奶</el-dropdown-item>
					        <el-dropdown-item>蚵仔啊啊啊煎</el-dropdown-item>
				      </el-dropdown-menu>
			    </el-dropdown>
		  </el-col>
		  <!-- 内容区 -->
		  <el-col :span="24" class="i_article">
		  		<div class="left_nav">
			  		<!-- 展开按钮 -->
			  		<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						  <el-radio-button :label="false">展开</el-radio-button>
						  <el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<!-- 导航 -->
					<el-menu background-color="#EEF1F6" router default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
						    <el-submenu index="1">
							    <template slot="title">
								      <i class="el-icon-location"></i>
								      <span slot="title">导航一</span>
							    </template>
							   <!--  <el-menu-item-group>
								      <span slot="title">分组一</span>
								      <el-menu-item index="1-1">选项1</el-menu-item>
								      <el-menu-item index="1-2">选项2</el-menu-item>
							    </el-menu-item-group>
							    <el-menu-item-group title="分组2">
							      	  <el-menu-item index="1-3">选项3</el-menu-item>
							    </el-menu-item-group>
							    <el-submenu index="1-4">
								      <span slot="title">选项4</span>
								      <el-menu-item index="1-4-1">选项1</el-menu-item>
							    </el-submenu> -->

							    <el-menu-item index="1-1">
							        <span slot="title">导航1-1</span>
							    </el-menu-item>
							    <el-menu-item index="1-2">
							        <span slot="title">导航1-2</span>
							    </el-menu-item>
							    <el-submenu index="1-3">
						    		<span slot="title">选项1-3</span>
						    		<el-menu-item index="1-3-1">选项1-3-1</el-menu-item>
						    		<el-menu-item index="1-3-2">选项1-3-2</el-menu-item>
							    </el-submenu>
						    </el-submenu>


							<el-menu-item index="/index/book">
							    <i class="el-icon-menu"></i>
							    <span slot="title">图书</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
							    <i class="el-icon-document"></i>
							    <span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="/">
							    <i class="el-icon-setting"></i>
							    <span slot="title">导航四</span>
							</el-menu-item>
					</el-menu>
				</div>
				<!-- 内容切换区 -->
				<div class="all_articalSpace">
						<router-view></router-view>
				</div>
		    </el-col>
	</el-row>
</template>

<script>
	export default{
		data(){
			return{
 				isCollapse: false
			}
		},
		methods:{
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>

<style scoped lang="less">
	.i_index{
		position: absolute;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    .i_header{
	    	height: 60px;
		    line-height: 60px;
		    background: #20A0FF;
		    padding: 0;
		    >div{
		    	float: left;
		    }
		    .user_space{
		    	float: right;
		    	color: #fff;
		    }
	    }
	}
	.i_article{
		display: flex;
	    position: absolute;
	    top: 60px;
	    bottom: 0;
   		overflow: hidden;
   		div.left_nav{
   			background:#EEF1F6;
   			overflow-x: hidden;
   			overflow-y: auto;
   			&::-webkit-scrollbar {
		        display: none;
		    }
   		}
   		.all_articalSpace{
   			border: 1px solid red;
   			flex: 1;
   			overflow-y: auto;
		    padding: 10px;
   		}
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
	//   .el-submenu .el-menu {
	//     background-color: #e4e8f1;
	// }
</style>