const resultArray = [];
const providersCount = [];

const report = [...reports['6825ef9cb1ad7e9fe0be4180'].rows]
  .sort((a, b) => b[1] - a[1]); 

for (let i = 0; i < report.length; i++) {
  const item = report[i];
  const game = catalogs.casino_games_feed_new.item_by_id(item[0]);

  if (game) {
    providersCount.push(game.provider);

    const providerPopularity = providersCount.filter(
      (p) => p === game.provider
    ).length;

    const resultItem = {
      item_id: item[0],
      properties: {
        popularity: i + 1,
        provider_popularity: providerPopularity,
      },
    };

    resultArray.push(resultItem);
  }
}
