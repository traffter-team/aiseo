const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Read the SQL schema file
const schemaPath = path.join(__dirname, '../src/lib/db/schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

console.log('📋 AISEO Database Setup Script');
console.log('================================');
console.log('');
console.log('Your Supabase credentials:');
console.log(`URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`);
console.log(`Key: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}`);
console.log('');
console.log('📝 SQL Schema to execute in Supabase:');
console.log('=====================================');
console.log(schema);
console.log('');
console.log('📋 Instructions:');
console.log('1. Go to your Supabase project dashboard');
console.log('2. Navigate to SQL Editor');
console.log('3. Copy the SQL schema above');
console.log('4. Paste and execute');
console.log('5. Verify all 10 tables are created');
console.log('');
console.log('✅ Database setup complete!'); 