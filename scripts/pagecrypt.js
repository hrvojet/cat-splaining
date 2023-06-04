import { encrypt } from 'pagecrypt';
import 'dotenv/config'

await encrypt('plain-index.html', 'index.html', process.env.WEBSITE_PASS);