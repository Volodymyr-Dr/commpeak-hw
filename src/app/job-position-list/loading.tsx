import cls from "./job-position-list.module.scss";

export default function Loading() {
  return (
    <div className={cls.loading}>
      <span>Loading...</span>
    </div>
  );
}
