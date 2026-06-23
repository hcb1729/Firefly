import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/头像.png",

	// 名字
	name: "所追寻的风",

	// 个人签名
	bio: "一位普通的技术爱好者，爱好ACG，户外，羽毛球，足球，马拉松。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/hcb11729",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:861999067@qq.com",
			showName: false,
		},
		{
			name: "QQ群",
			icon: "fa7-brands:qq",
			url: "https://qun.qq.com/universal-share/share?ac=1&authKey=AJcp%2BhBCHuoSUVadAf%2B8P95IGRiSYhP%2B1YUw5KY3aWzRoHRCwproI2Lbh6al1WCL&busi_data=eyJncm91cENvZGUiOiI5MDE5NjE4OTkiLCJ0b2tlbiI6Inl0bnNsMTh2UFFkSDJIYURhMjl3WnhhMVYxNHlNZHlEbFhqaE9WSHhvS3dqRGxveUNjaEFTbTlkRDZYdDE2ekMiLCJ1aW4iOiI4NjE5OTkwNjcifQ==&data=ReaN9HEFyhFO3yNw56Vyfb5igYVv7UtSRDbaoU33ojzqeS-S1vQTsNca4zpdzUV6yHC1q6uilAHBz9jV1-LPtA&svctype=4&tempid=h5_group_info",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
