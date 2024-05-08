
import ReactDOM from "react-dom/client"
import User from "./components/user"
import appStore from "./utils/appStore"
import { Provider} from "react-redux"

const app = <Provider store={ appStore}>
    <h1><User></User></h1>
</Provider>
    
    
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)