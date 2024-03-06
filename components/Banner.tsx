export default function HomeBanner() {
  return (
    <div className="flex flex-col gap-2 h-[300px] rounded-lg p-6 bg-no-repeat bg-center bg-[url('/home/home.jpg')]">
      <h1 className="text-xl font-black text-white">JW</h1>
      <span className="text-white">
        생각한 것을 구현할 수 있다? true | false
      </span>
    </div>
  );
}
