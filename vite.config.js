import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css',
            'resources/css/footer.css',
                'resources/css/bootstrap.css',
                'resources/js/bootstrap.js',
            'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
