const fs = require('fs');
const path = require('path');

const specialDirMap = {
    '1.javascript-high': '1、javascript深度剖析',
    'ssr': '服务端渲染SSR',
    'react-native': 'React Native',
    'mini-game': '小程序',
    'coding': '编程题',
    'practice-mode': '设计模式',
    'network': '网络和网络安全',
    'suanfa': '算法和数据结构',
    'browser': '浏览器',
    'question': '面试题',
    '2.front-program': '2、前端工程化'
}
let sidebar = {},
    docsPath = path.resolve(__dirname, '../'), // docs目录的path
    docsDirs = fs.readdirSync(docsPath).filter(dir => !['.vuepress', 'README.md'].includes(dir));  // 获取docs下面的博客目录，且过滤两个特殊目录
docsDirs.map(dir => {  // 遍历每个博客目录
    let configArr = [];  // 每个博客目录的配置
    const blogDirPath = path.join(docsPath, dir); // 博客目录的路径
    const blogDirs = fs.readdirSync(blogDirPath).filter(t => t != 'README.md'); // 读取博客目录的子目录
    blogDirs.map(item => {  // 遍历读取子目录下的文件
        if (!specialDirMap[item]) {
            addConfig(item)
        }
    })
    blogDirs.map(item => {  // 遍历读取子目录下的文件
        if (specialDirMap[item]) {
            addConfig(item)
        }
    })
    sidebar[`/${dir}/`] = configArr;
    function addConfig(item) {
        const files = fs.readdirSync(path.join(blogDirPath, item));
        const formatFiles = files.sort((a, b) => {
            return a.split('.')[0] - b.split('.')[0]
        }).map(file => {
            const fileName = file.replace('.md', '.html'); // 替换md为html
            return `/${dir}/${item}/${fileName}`
        });
        configArr.push({
            title: specialDirMap[item] || item,   // 标题
            path: formatFiles[0],      // 可选的, 应该是一个绝对路径
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 3,    // 可选的, 默认值是 1
            children: formatFiles
        })
    }
});
sidebar['/'] = [];

module.exports = {
    base: '/blog/',
    title: '洛清寒前端进阶',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        // smoothScroll: true,
        logo: '/images/blog.jpg',
        sidebar,
        nav: [
            { text: '首页', link: '/' },
            { text: '拉勾-大前端', link: '/lagou-bigfront/' },
            { text: '慕课-大前端', link: '/muke-bigfront/' },
            { text: '慕课-前端架构师', link: '/muke-jiagou/' },
            { text: '博文-基础', link: '/interview/' },
            { text: '博文-进阶', link: '/blog/' },
            {
                text: '其它',
                items: [
                    { text: '大厂面经', link: 'https://juejin.cn/post/7004638318843412493' },
                    { text: 'Github', link: 'https://github.com/lensh/blog' },
                    {
                        text: '项目',
                        items: [
                            { text: 'vue-qq', link: 'https://github.com/lensh/vue-qq' },
                            { text: 'mini-promise', link: 'https://github.com/lensh/mini-promise' },
                            { text: 'react-ssr', link: 'https://github.com/lensh/React-SSR' }
                        ]
                    }
                ]
            }
        ]
    }
}