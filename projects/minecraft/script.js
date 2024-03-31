class Minecraft {
  /**
   * Mounts the game to the target element.
   *
   * @param {string} target - The target element to mount the game.
   */
  mount(target) {
    this.#target = target;

    // Mount tools
    this.#tools = [
      {
        tool: "axe",
        elem: document.querySelector(`${target} .tools .axe`),
      },
      {
        tool: "pickaxe",
        elem: document.querySelector(`${target} .tools .pickaxe`),
      },
      {
        tool: "shovel",
        elem: document.querySelector(`${target} .tools .shovel`),
      },
    ];

    // Mount reroll button
    this.#reroll = document.querySelector(`${target} .reroll`);

    // Mount inventory
    this.#inventory = [
      {
        resource: "dirt",
        quantity: 0,
        elem: document.querySelector(`${target} .inventory .dirt`),
        countElem: document.querySelector(`${target} .inventory .dirt .count`),
      },
      {
        resource: "rock",
        quantity: 0,
        elem: document.querySelector(`${target} .inventory .rock`),
        countElem: document.querySelector(`${target} .inventory .rock .count`),
      },
      {
        resource: "tree",
        quantity: 0,
        elem: document.querySelector(`${target} .inventory .tree`),
        countElem: document.querySelector(`${target} .inventory .tree .count`),
      },
    ];

    // Mount landscape
    this.#landscape = Array.from(
      document.querySelectorAll(`${this.#target} .landscape .point`)
    ).map((elem) => ({ resource: undefined, elem }));

    // Select tool
    for (const { elem, tool } of this.#tools)
      elem.addEventListener("click", () => {
        this.#selectedTool = this.#selectedTool === tool ? undefined : tool;
        this.refresh();
      });

    // Reroll landscape
    this.#reroll.addEventListener("click", () => {
      this.reroll();
      this.refresh();
    });

    // Select resource
    for (const { elem, resource } of this.#inventory)
      elem.addEventListener("click", () => {
        this.#selectedResource =
          this.#selectedResource === resource ? undefined : resource;
        this.refresh();
      });

    // Pick up or drop resource
    for (const point of this.#landscape)
      point.elem.addEventListener("click", () => {
        if (point.resource) {
          if (this.#selectedTool === this.#applicableTools[point.resource]) {
            const slot = this.#inventory.find(
              ({ resource }) => resource === point.resource
            );

            slot.quantity++;
            point.resource = undefined;
            this.refresh();
          } else alert("Please, select an applicable tool");
        } else {
          if (this.#selectedResource) {
            const slot = this.#inventory.find(
              ({ resource }) => resource === this.#selectedResource
            );

            if (slot.quantity) {
              slot.quantity--;
              point.resource = this.#selectedResource;
              this.refresh();
            } else alert("You don't have enough resources");
          } else alert("Please, select the resource to drop");
        }
      });

    this.reroll();
    this.refresh();
  }

  /**
   * Refreshes the game field.
   */
  refresh() {
    for (const { elem, tool } of this.#tools)
      if (tool === this.#selectedTool) elem.classList.add("selected");
      else elem.classList.remove("selected");

    for (const { elem, countElem, resource, quantity } of this.#inventory) {
      countElem.textContent = quantity.toFixed();

      if (resource === this.#selectedResource) elem.classList.add("selected");
      else elem.classList.remove("selected");
    }

    for (const { elem, resource } of this.#landscape) {
      elem.classList.remove("dirt", "rock", "tree");

      if (resource) elem.classList.add(resource);
    }
  }

  /**
   * Rerolls the landscape resources.
   */
  reroll() {
    for (const slot of this.#landscape)
      switch (Math.floor(7 * Math.random())) {
        case 0:
          slot.resource = "dirt";

          break;

        case 1:
          slot.resource = "rock";

          break;

        case 2:
          slot.resource = "tree";

          break;

        default:
          slot.resource = undefined;
      }
  }

  /**
   * @type {Object<"dirt" | "rock" | "tree", "axe" | "pickaxe" | "shovel">}
   */
  #applicableTools = {
    dirt: "shovel",
    rock: "pickaxe",
    tree: "axe",
  };

  /**
   * @type {Array<{ resource: "dirt" | "rock" | "tree", quantity: number, elem: Element, countElem: Element }>}
   */
  #inventory;

  /**
   * @type {Array<{ resource: "dirt" | "rock" | "tree", elem: Element }>}
   */
  #landscape;

  /**
   * @type {Element}
   */
  #reroll;

  /**
   * @type {"dirt" | "rock" | "tree"}
   */
  #selectedResource;

  /**
   * @type {"axe" | "pickaxe" | "shovel"}
   */
  #selectedTool;

  /**
   * @type {string}
   */
  #target;

  /**
   * @type {Array<{ tool: "axe" | "pickaxe" | "shovel", elem: Element }>}
   */
  #tools;
}
