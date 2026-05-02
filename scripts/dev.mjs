import { spawn } from 'node:child_process';

const command = process.env.ComSpec || 'cmd.exe';

const children = [
  spawn(command, ['/d', '/s', '/c', 'npm run dev:api'], {
    stdio: 'inherit',
  }),
  spawn(command, ['/d', '/s', '/c', 'npm run dev:web'], {
    stdio: 'inherit',
  }),
];

const shutdown = (code = 0) => {
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exit(code);
};

for (const child of children) {
  child.on('exit', (code) => {
    if (code && code !== 0) {
      shutdown(code);
    }
  });
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
