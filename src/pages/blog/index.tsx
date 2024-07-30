import { BlogList } from '@/components/blog';
import { Wrapper } from '@/components/wrapper';

import defaultArticle from '@/data/posts/parsed/高效开发方法.json';
export const revalidate = 60;

export default async function Page() {
    return <div>Blog</div>;
    // const blogs = [
    //     {
    //         id: 1,
    //         title: '测试',
    //         description: '描述',
    //         tags: ['MySql'],
    //         content:
    //             '<h2><code>高效开发方法总结</code></h2>\n<ol>\n<li><p>学会表达</p>\n<ol>\n<li>在写复杂表达式时，可使用一个变量将表达式用变量的方式表示</li>\n<li>函数、变量命名要语义化</li>\n</ol>\n</li>\n<li><p>学会复盘</p>\n<ol>\n<li>花一些时间清理自己的代码</li>\n<li>尽量以函数式进行编程</li>\n</ol>\n</li>\n<li><p>拥抱变化</p>\n<ol>\n<li>在开发功能时，要考虑变化的情况</li>\n<li>在封装时要考虑能否封装成一个 js 模块，后续只需要调用响应的 API 即可</li>\n</ol>\n</li>\n<li><p>学会修复 bug</p>\n<ol>\n<li>遇到 bug 考虑为了会出现此缺陷，一定要关注上下文</li>\n<li>学会正确使用 git commit 规范，严格要求自己</li>\n</ol>\n</li>\n<li><p>不要怕错</p>\n<ol>\n<li>遇到自己不懂的逻辑，但又不敢改之前的代码，这是不行的。</li>\n<li>大胆的修改，或者自己又更好的实现方式或者重构的方法可以及时修改</li>\n</ol>\n</li>\n<li><p>每个方法只关心一个上下文</p>\n<ol>\n<li>一个函数只做一件事，将一个功能按照不同模块划分开</li>\n</ol>\n</li>\n<li><p>消灭注释</p>\n<ol>\n<li>添加注释的前提要保证函数命名变量要语义化</li>\n<li>任何需要添加注释的地方，99% 是因为这段代码不合理</li>\n</ol>\n</li>\n<li><p>学会命名</p>\n<ol>\n<li>如果在编写一个函数时无法对其进行命名，那么这个函数的设计是不合理的。</li>\n<li>对函数要进行准确的命名，这样更加有利用代码的可读性</li>\n</ol>\n</li>\n<li><p>学会提炼函数</p>\n<ol>\n<li>提炼函数可以让我们将意图与实现分开</li>\n<li>以意图命名函数，但是如果发现自己不能合理命名，此时不应该提炼这个函数，应该要考虑更多</li>\n</ol>\n</li>\n<li><p>学会返回</p>\n<ol>\n<li>大部分函数可以使用 result 作为返回值，在函数开头定义，在函数结尾 return, 这样在下次看这段代码时就知道返回的是什么了。</li>\n</ol>\n</li>\n<li><p>考虑时机</p>\n<ol>\n<li>在拿到需求时，很容易去实现功能，但是不会去调研，修改 bug 也是如此</li>\n<li>在实现功能时要考虑清楚这个&quot;动作&quot;要在什么时候去触发，返回等等。</li>\n</ol>\n</li>\n<li><p>保持可拓展性</p>\n<ol>\n<li>在拿到新需求时不要想着昨晚就 ok, 因为你无法保证在后面的某一分钟产品让你添加一个新的功能</li>\n<li>要多使用 map 结构来保持功能的可拓展性，让程序走不同的代码逻辑</li>\n</ol>\n</li>\n<li><p>巧用模块</p>\n</li>\n<li><p>巧用方法</p>\n<ol>\n<li>要学习的是方法，比如《重构》《代码整洁之道》</li>\n<li>只要你的方法好，后面产出的代码才会好</li>\n</ol>\n</li>\n<li><p>择善其从</p>\n<ol>\n<li>如果觉得你在做重复的工作时，一定是你的方法不对，而不是这个人物不对</li>\n<li>任何一个人物都有可学习的地方， 我们需要做的是脑力活动，不存在像搬砖那样的情况</li>\n<li>学习别人实现的源码，看别人的相同效果是如何实现的，择善而从自己去实现一个新的方案</li>\n</ol>\n</li>\n<li><p>学会参考</p>\n</li>\n<li><p>产品思维</p>\n<ol>\n<li>有产品思维是好的，能理解产品需求，能与产品进行有效沟通这是优势</li>\n<li>学会跳出程序员的纬度，用户多学科交叉的能力。要了解产品提这个需求的目的</li>\n<li>在不了解需求的情况下要多于产品进行交流，可以带着方案去找产品讨论</li>\n</ol>\n</li>\n<li><p>适当做减法</p>\n</li>\n<li><p>学会做需求</p>\n<ol>\n<li>接到新一个新需求，调研，考虑这些方法是否可行，否则做到一半要换方案，就只能自己加班</li>\n<li>在明确了自己的方案并有一个想法的时候，多去尝试，尝试使用它，如果发现不太合适，也没关系，只要在里面学到了东西，那时间就没有白费。</li>\n<li>做在需求时不能局限于这个需求，要有可拓展性， 眼光要放长远</li>\n</ol>\n</li>\n<li><p>学会问问题</p>\n<ol>\n<li>学会简而言之的把问题描述清楚</li>\n<li>在问问题时，可以带着自己的方案去询问</li>\n</ol>\n</li>\n<li><p>多用快捷键</p>\n<ol>\n<li>平时要养成&quot;快&quot;的习惯</li>\n</ol>\n</li>\n<li><p>一段时间干好一件事</p>\n</li>\n<li><p>动手的前提：过一遍接口的文档</p>\n</li>\n<li><p>快速定位问题：</p>\n<ol>\n<li>看上下文 -&gt; 看 issue -&gt; 看文档 -&gt; 看文章 -&gt; 看源码</li>\n</ol>\n</li>\n<li><p>衡量代码好坏有两个非常重要的标准就是：运行时间和占用空间，就是我们后面要说到的时间复杂度和空间复杂度</p>\n</li>\n</ol>\n'
    //     }
    // ];
    // return (
    //     <Wrapper className="flex min-h-screen flex-col px-6 pb-24 pt-8">
    //         <h2 className="pb-8 text-3xl font-bold md:text-4xl">最新文章</h2>
    //         <BlogList blogs={blogs} />
    //     </Wrapper>
    // );
}
