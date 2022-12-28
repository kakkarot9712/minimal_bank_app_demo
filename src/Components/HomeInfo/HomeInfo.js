import "./HomeInfo.css";

const HomeInfo = () => {
  return (
    <section className="home-info">
      <h1>Banking App Demo</h1>
      <br />
      <p>
        This website is demo of Banking app, This will allow user to play around
        with common banking website feature like sending money, showing
        transaction history and so on
      </p>
      <br />
      <h3>Note: </h3>
      <p>
        As this website is demo website, there is no signup feature and 2 users
        are hardcoded inside this website. So to access Account info page, user
        has 2 accounts
      </p>
      <br />
      <code>username: vg | Pin: 123</code>
      <br />
      <code>username: bg | Pin: 456</code>
      <br />
      <p>
        User can tranfer amount using any of above usernames as a name in
        transfer form.
      </p>
    </section>
  );
};

export default HomeInfo;
