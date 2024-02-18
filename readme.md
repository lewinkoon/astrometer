# Astrometer 🛰️

> Weather data **logger** based on a ESP32 microcontroller.

## Setup

Clone the repository.

```bash
git clone https://github.com/lewinkoon/astrometer
```

Set environment variables.

```bash
cd astrometer
touch .env
echo "PUBLIC_SUPABASE_ANON_KEY=[ANONYMOUS KEY]" >> .env
echo "PUBLIC_SUPABASE_URL=[DATABASE URL]" >> .env
```

Run local server for development.

```bash
pnpm run dev
```

Or build the app.

```bash
pnpm run build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
