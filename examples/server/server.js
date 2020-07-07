import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/inputs' }));
    app.start(3002);
};

init().catch((err) => {
    console.error(err.message);
});
