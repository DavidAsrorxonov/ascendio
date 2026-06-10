"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  defaultValue: string;
  label: string;
  options: SelectOption[];
};

export function ProfileSelectField({ defaultValue, label, options }: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const fieldRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const selectedOption = options.find((option) => option.value === selectedValue);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent): void {
      if (
        event.target instanceof Node &&
        fieldRef.current &&
        !fieldRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function selectOption(value: string): void {
    setSelectedValue(value);
    setIsOpen(false);
  }

  return (
    <div className="block" ref={fieldRef}>
      <span
        id={labelId}
        className="text-xs font-bold uppercase leading-4 text-text-secondary"
      >
        {label}
      </span>
      <div className="relative mt-2">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}
          onClick={() => {
            setIsOpen((current) => !current);
          }}
          className={`flex h-11 w-full items-center justify-between rounded-md border bg-surface px-4 text-left text-sm font-semibold text-text-primary shadow-card outline-none transition-colors hover:border-accent hover:bg-surface-secondary focus:border-accent focus:ring-1 focus:ring-accent ${
            isOpen
              ? "border-accent bg-surface-secondary ring-1 ring-accent"
              : "border-border"
          }`}
        >
          <span>{selectedOption?.label ?? "Select"}</span>
          <span className="flex size-7 items-center justify-center rounded-md bg-surface-secondary text-text-secondary">
            <ChevronDown
              className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </span>
        </button>

        {isOpen ? (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-accent bg-overlay py-2 text-surface shadow-card">
            <ul role="listbox" aria-labelledby={labelId}>
              {options.map((option) => {
                const isSelected = option.value === selectedValue;

                return (
                  <li key={option.value} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        selectOption(option.value);
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left text-base font-semibold leading-6 transition-colors hover:bg-accent ${
                        isSelected ? "bg-overlay-dark" : ""
                      }`}
                    >
                      <Check
                        className={`size-4 ${isSelected ? "opacity-100" : "opacity-0"}`}
                        aria-hidden="true"
                      />
                      <span>{option.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
