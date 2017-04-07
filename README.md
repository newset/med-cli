# med-cli
快速创建 hybrid 项目和页面的命令行工具


## 安装
``` shell
npm i med-cli -g
或者 使用淘宝镜像 (npm i cnpm -g)
cnpm i med-cli -g 
```


## 新建项目
``` shell
med new project 
```

该命令通过下载 [https://github.com/med-templates/hybrid](!https://github.com/med-templates/hybrid) 内容进行创建。


## 新建页面
``` shell
med page home
```
该命令使用 source/page 目录里的文件进行创建

## 监控 less 文件
``` shell
med watch 
```
目前仅使用了 less 模块监控 less 文件
