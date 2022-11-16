
function One() {
  return (
    <section>
      <img src="https://picsum.photos/200/300" alt="" />
      <h2>One</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nisi amet beatae animi, vel, similique ipsa placeat eum reiciendis illum in ab! Beatae neque consequatur eveniet, maiores totam culpa quae?</p>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
    </section>
  )
}
function Two() {
  return (
    <section>
      <img src="https://picsum.photos/200/300" alt="" />
      <h2>Two</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nisi amet beatae animi, vel, similique ipsa placeat eum reiciendis illum in ab! Beatae neque consequatur eveniet, maiores totam culpa quae?</p>
    </section>
  )
}
function Three() {
  return (
    <section>
      <img src="https://picsum.photos/200/300" alt="" />
      <h2>Three</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nisi amet beatae animi, vel, similique ipsa placeat eum reiciendis illum in ab! Beatae neque consequatur eveniet, maiores totam culpa quae?</p>
      <a href="#">SHARE</a>
    </section>
  )
}

function App() {
  return (
    <>
      <One/>
      <Two/>
      <Three/>
    </>
  );
}

export default App;