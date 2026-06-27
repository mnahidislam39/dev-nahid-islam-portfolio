// id return function
function getId(get_id) {
  return document.getElementById(get_id);
}

// clsss all return Function
function getAllClass(all_class) {
  return document.querySelectorAll(all_class);
}

// query_select return Function
function getClass(get_class) {
  return document.querySelector(get_class);
}

// get id and add class (Fixed: Dynamic number of classes)
function addClassById(elementId, ...classes) {
  const element = document.getElementById(elementId);
  if (element) {
    // Filter out any undefined or empty values safely
    const validClasses = classes.filter((c) => c);
    if (validClasses.length > 0) {
      element.classList.add(...validClasses);
    }
  }
  return element;
}

// get id and remove class (Fixed: Dynamic number of classes)
function removeClassById(elementId, ...classes) {
  const element = document.getElementById(elementId);
  if (element) {
    const validClasses = classes.filter((c) => c);
    if (validClasses.length > 0) {
      element.classList.remove(...validClasses);
    }
  }
  return element;
}
