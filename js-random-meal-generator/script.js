const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      .then(res => res.json())
      .then(res => {
        createMeal(res.meals[0])
      });
});

function createMeal(meal) {
  mealContainer.innerHTML = `
      <div class="row">
        <div class="column five">
          <img src="${meal.strMealThumb}" alt="Meal Img" />
        </div>
        <div class="column seven">
          <h4>${meal.strMeal}</h4>
          <p>${meal.strInstructions}</p>
        </div>
      </div>
  `;
}
