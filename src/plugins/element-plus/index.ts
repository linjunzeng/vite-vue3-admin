import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const installElement = (app: any) => {
    app.use(ElementPlus)
}

export default installElement