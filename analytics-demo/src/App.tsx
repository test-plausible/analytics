import { createSignal, type Component } from 'solid-js';
import { Route, Router, A } from '@solidjs/router';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';

// In solid.js, the component function is only run once. 
// This contrasts with React, where the component function is re-run on every render.
const App: Component = () => {
  return (
    // m-auto: margin auto, comes from tailwind
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl gap-4"
      >
        <h1 class="text-3xl flex justify-center">Analytics Demo</h1>

        <div class="flex justify-center gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
        </div>
      </header>

      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
      </Router>

    </div>
  );
};

export default App;
