import { describe, it, expect, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { defineComponent, h, Suspense } from "vue";
import SuspenseExample from "../SuspenseExample.vue";

const mountSuspense = async (component, options) => {
  vi.useFakeTimers();

  const c = defineComponent({
    render() {
      return h(Suspense, null, {
        default: h(component),
        fallback: h("div", "fallback"),
      });
    },
  });

  const wrapper = mount(c, options);

  vi.advanceTimersByTime(100)
  await flushPromises();

  return wrapper;
};

describe("the-example", () => {
  it("is testable", async () => {
    const wrapper = await mountSuspense(SuspenseExample);

    console.log(wrapper.html());
    expect(wrapper.html()).toContain("Suspended");
  });
});
