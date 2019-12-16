# 1. 克隆项目
```shell script
git clone ssh://git@10.30.30.3:10022/fe-group/scaffold-ui.git
```

# 2. 修改项目名称
```shell script
mv scaffold-ui ${projectName}
```

# 3. 修改 git 仓库地址
```shell script
git remote set-url origin ${projectRepository}
```

# 4. 设置 git 用户信息
```shell script
git config user.name 你的名字
git config user.email 你的公司邮箱
```

# 5. 使用编辑器打开工程
全局替换 scaffold-ui 为 ${projectName}


- `${projectName}`：指的是项目名称
- `${projectRepository}`：指的是项目仓库地址
