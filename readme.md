# Astrometer 🛰️

Realtime data from my weather station

<img width="1470" alt="Screenshot" src="https://github.com/lewinkoon/astrometer/assets/57636993/07db16d0-b339-4754-8eb1-497a8202f682">

## Usage

Clone the repository.

```bash
git clone https://github.com/lewinkoon/astrometer
```

Set environment variables

```bash
cd astrometer
touch .env
echo "PUBLIC_SUPABASE_ANON_KEY=[ANONYMOUS KEY]" >> .env
echo "PUBLIC_SUPABASE_URL=[DATABASE URL]" >> .env
```

Run local server for development

```bash
npm run dev
```

Or build the app

```bash
npm run build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
