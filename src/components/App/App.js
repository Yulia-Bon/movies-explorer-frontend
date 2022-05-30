import './App.css';

function App() {
  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <Main isLogin={isLogin} onClick={} />
            </Route>

            <Route exact path="/signup">
              <Register
                  isLoading={isLoading}
                  onRegister={handleRegister}
                  errorMessage={registerErrorMessage}
              />
            </Route>

            <Route exact path="/signin">
              <Login
                  isLoading={isLoading}
                  onLogin={handleLogin}
                  errorMessage={loginErrorMessage}
              />
            </Route>

            <ProtectedRoute
                exact
                path="/movies"
                isLogin={isLogin}

            />

            <ProtectedRoute
                exact
                path="/saved-movies"
            />

            <ProtectedRoute
                exact
                path="/profile"
            />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <Route>
            {isLogin ? <Redirect to="/movies" /> : <Redirect to="/" />}
          </Route>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
