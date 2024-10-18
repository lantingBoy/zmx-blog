---
title: Vue3-实现函数式弹框
createTime: 2024/10/18 10:13:58
permalink: /Vue/ky2sm66m/
---

函数式弹窗使用场景:

- 公共弹框类
- 二次确认弹框类

封装函数式弹框组件：基本思路

1. 先定义一个基本组件 如 dialog.vue
```vue
    <template>
	<el-dialog :model-value="visible" title="账号和密码" @close="handleClose">
		<el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon label-width="auto" class="demo-ruleForm">
			<el-form-item label="Password" prop="pass">
				<el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
			</el-form-item>
			<el-form-item label="Confirm" prop="checkPass">
				<el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
			</el-form-item>
		</el-form>

		<!-- 省略账号、密码表单部分... -->
		<el-button type="primary" @click="submitForm()">提交</el-button>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ElMessage } from "element-plus";
// import { Modal } from "@hdzk-hel/pangu";
interface Props {
	visible: boolean;
	close?: () => void;
	confirm?: (data) => void;
}

const props = defineProps<Props>();
const ruleForm = reactive({
	pass: "",
	checkPass: ""
});
const emit = defineEmits(["update:visible"]);

const submitForm = async () => {
	// 省略validate表单校验的代码
	// 这里的data为表单中输入的账号密码
	if (!ruleForm.pass || !ruleForm.checkPass) {
		ElMessage.error("请输入密码");
		return;
	}
	props.confirm?.(ruleForm);
	handleClose();
};

const handleClose = () => {
	emit("update:visible", false);
	props.close?.();
};
</script>

```
然后创建一个函数用于显示和隐藏弹框
```typescript
import { App, createApp } from "vue";
import PasswordDialog from "./test.vue";
// 这个test.vue就是我们前面实现的弹窗组件

export async function showPasswordDialog(): Promise<any> {
	return new Promise((resolve, reject) => {
		console.log("reject: ", reject);
		let mountNode = document.createElement("div");
		let dialogApp: App<Element> | undefined = createApp(PasswordDialog, {
			visible: true,
			close: () => {
				if (dialogApp) {
					dialogApp.unmount();
					document.body.removeChild(mountNode);
					dialogApp = undefined;
					// reject("close");
				}
			},
			confirm: (res: any) => {
				resolve(res);
				dialogApp?.unmount();
				document.body.removeChild(mountNode);
				dialogApp = undefined;
			}
		});
		document.body.appendChild(mountNode);
		dialogApp.mount(mountNode);
	});
}

```
最后可以使用如下方式进行调用
```js
try {
  // 调用这个就会弹出弹窗
    const res: RuleForm = await showPasswordDialog();
    // 这个res就是输入的账号密码
    console.log("res", res);
  } catch (error) {
    console.log(error);
  }


```