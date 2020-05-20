// Modules
import {Exel} from '@/components/Exel/index.js';
import {Header} from '@/components/Header/index.js';
import {Formula} from '@/components/Formula/index.js';
import {Toolbar} from '@/components/Toolbar/index.js';
import {Table} from '@/components/Table/index.js';
// Styles
import './scss/index.scss';

try {
    const exel = new Exel("#app", { components: [Header, Formula, Toolbar, Table] });
    exel.render();
} catch(err) {
    console.log(err);
}