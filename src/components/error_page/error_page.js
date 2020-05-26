<Container>
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/contact" component={Contact} />

    <Route component={ErrorPage} />
  </Switch>
</Container>;
