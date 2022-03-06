import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import { HomeComponent } from "./Home/Home.components"
import { AddUser } from "./User/AddUser.components"
import { EditUser } from "./User/EditUser.components"

export const AppRouting = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomeComponent} exact />
                <Route path='/add-user' component={AddUser} />
                <Route path="/edit-user/:id" component={EditUser} />
            </Switch>
        </BrowserRouter>
    )
}